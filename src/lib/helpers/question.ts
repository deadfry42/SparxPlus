import { log } from "..";
import { QuestionID, Question } from "../classes/questionClasses";
import { PlatformID } from "../constants/enums";

export function getQuestionID(platformID : PlatformID) {
    if (platformID == PlatformID.SparxMaths) {
        const url = window.location.href;

        var tokens = url.split("/");
        var packageIndex = -1;

        var revisionIndex = -1;

        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (token.toLowerCase() == "assessments") {
                revisionIndex = i;
            }
            if (token.toLowerCase() == "package") {
                // just before the uri ID
                packageIndex = i;
                break;
            }
        }

        var uri = "";
        var taskID : any = 0;
        var question : any = 0;
        var questionID : QuestionID | null = null

        try {
            // this is rudimentary
            // TODO: improve
            var task = "";
            var item = "";
            if (packageIndex < tokens.length) {
                // there is atleast 1 more token
                uri = tokens[packageIndex+1]
                task = tokens[packageIndex+2] == null ? "" : tokens[packageIndex+2]
                taskID = tokens[packageIndex+3]
                item = tokens[packageIndex+4] == null ? "" : tokens[packageIndex+4]
                question = tokens[packageIndex+5]
            }

            if (task.toLowerCase() == "task" && item.toLowerCase() == "item") {
                questionID = new QuestionID(uri, taskID, question, PlatformID.SparxMaths, (revisionIndex > 0))
            }
        } catch(e) {
            log("QuestionID", "Failed to get questionID!")
        }

        return questionID;
    }

    return null;
}

export function getQuestion(platformID : PlatformID) {
    var questionID = getQuestionID(platformID);
    if (questionID == null) return null;

    return new Question(questionID);
}