import { QuestionID } from "../classes/questionClasses";
import { TerminatedWhiteboardStroke, DefaultPenWhiteboardStroke, WhiteboardStroke } from "../classes/whiteboardClasses";
import { StrokeType } from "../constants/enums";

export function deserialiseQuestionID(questionID : string) {
    var tokens = questionID.split("/")

    var questionidtext;
    var platformid;
    var questiontype;
    var encodedQuestionID;

    try {
        questionidtext = tokens[0];
        platformid = tokens[1];
        questiontype = tokens[2];
        encodedQuestionID = tokens[3];

        if (questionidtext != "QuestionID") return null;
        platformid = parseInt(platformid);
        questiontype = questiontype == "Rev" ? true : false;
        
        var idTokens = encodedQuestionID.split(":")
        var uri = idTokens[0]
        var task = parseInt(idTokens[1]);
        var question = parseInt(idTokens[2]);

        return new QuestionID(uri, task, question, platformid, questiontype)
    } catch (e) {
        return null;
    }
}

export function deserialiseWhiteboardStroke(data : string) {
    try {
        const tokens = data.split(" ")
        const type = parseInt(tokens[1])
        const version = parseInt(tokens[0])
        
        switch (type) {
            case StrokeType.Terminator:
                switch (version) {
                    case 0:
                        return new TerminatedWhiteboardStroke()
                }
                return null;

            case StrokeType.Stroke:
                switch (version) {
                    case 0:
                        const x = parseInt(tokens[2])
                        const y = parseInt(tokens[3])
                        const colour = tokens[4]
                        if (colour == "!") {
                            return new DefaultPenWhiteboardStroke(x, y)
                        } else {
                            return new WhiteboardStroke(x, y, colour)
                        }
                        
                }
                return null;
        }
    } catch(e) {
        return null;
    }
}