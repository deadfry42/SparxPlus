export function getSVG(which : string, className? : string | null) : HTMLElement {
    switch(which) {
        case "triangle-exclamation":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } aria-hidden="true" focusable="false" data-prefix="fas" data-icon="triangle-exclamation" class="svg-inline--fa fa-triangle-exclamation " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>`
            return <HTMLElement>svg.firstChild;

        case "experimental":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` }  viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" color="#D6BCFA"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3313 4.83437C15.3313 4.63992 15.5104 4.40099 15.834 4.40099H23.1676C23.4964 4.40099 23.6703 4.63207 23.6703 4.83437C23.6703 5.03668 23.4964 5.26776 23.1676 5.26776H22.6652C22.2855 5.26776 21.9777 5.58138 21.9777 5.96825V11.3903C21.9777 12.6046 22.2394 13.8002 22.7252 14.9102L24.2157 18.3251L29.3042 29.9317C30.3853 32.3851 28.5294 35.2144 25.5582 35.2144H13.4434C10.4712 35.2144 8.61358 32.3876 9.69723 29.9321L9.69793 29.9305L14.7859 18.3251L16.276 14.9113L16.2763 14.9105C16.7662 13.7957 17.0239 12.6001 17.0239 11.3903V5.96825C17.0239 5.58138 16.7161 5.26776 16.3364 5.26776H15.834C15.5104 5.26776 15.3313 5.02882 15.3313 4.83437ZM25.5582 36.6154H25.5649L25.5685 36.6154C29.3825 36.6087 32.1055 32.8694 30.5586 29.3579L25.4716 17.7548L23.981 14.3396C23.5699 13.4004 23.3527 12.3987 23.3527 11.3903V6.6599C24.2732 6.57161 25.0454 5.83145 25.0454 4.83437C25.0454 3.7711 24.1673 3 23.1676 3H15.834C14.8291 3 13.9562 3.78894 13.9562 4.83437C13.9562 5.81502 14.7243 6.56999 15.6489 6.65979V11.3903C15.6489 12.3966 15.4346 13.3978 15.0211 14.3386L15.0204 14.3403L13.53 17.7548L8.44318 29.3575L8.44274 29.3585C6.89061 32.8773 9.6252 36.6154 13.4434 36.6154H25.5582ZM24.2533 21.3381L28.2016 30.3321H28.1949C28.5725 31.2058 28.4882 32.1212 27.9454 32.8986C27.4228 33.6759 26.5461 34.132 25.5649 34.132H13.4501C12.4689 34.132 11.5923 33.6759 11.0494 32.8986C10.5065 32.1244 10.4256 31.209 10.7999 30.3321L15.4159 19.8252C16.6786 19.8252 17.6526 20.1196 18.7414 20.4486C20.121 20.8656 21.6847 21.3381 24.2533 21.3381ZM13.4973 30.7689C13.4973 31.3664 13.9963 31.845 14.6033 31.845C15.227 31.845 15.7294 31.3439 15.7294 30.7689C15.7294 30.194 15.2068 29.7154 14.6033 29.7154C13.9997 29.7154 13.4973 30.1715 13.4973 30.7689ZM16.4813 24.7591C16.4813 25.3565 16.9837 25.8351 17.6109 25.8351C18.2178 25.8351 18.7404 25.3372 18.7404 24.7591C18.7404 24.1809 18.238 23.683 17.6109 23.683C16.9837 23.683 16.4813 24.1616 16.4813 24.7591ZM22.2066 28.6393C22.2066 29.2367 22.709 29.7154 23.3362 29.7154C23.9397 29.7154 24.4421 29.2367 24.4421 28.6393C24.4421 28.0418 23.9633 27.5632 23.3362 27.5632C22.709 27.5632 22.2066 28.0418 22.2066 28.6393Z"></path></svg>`
            return <HTMLElement>svg.firstChild;

        case "x":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`
            return svg;

        case "undo":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7H15C16.8692 7 17.8039 7 18.5 7.40193C18.9561 7.66523 19.3348 8.04394 19.5981 8.49999C20 9.19615 20 10.1308 20 12C20 13.8692 20 14.8038 19.5981 15.5C19.3348 15.9561 18.9561 16.3348 18.5 16.5981C17.8039 17 16.8692 17 15 17H8.00001M4 7L7 4M4 7L7 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            return svg;

        case "redo":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H9.00001C7.13077 7 6.19615 7 5.5 7.40193C5.04395 7.66523 4.66524 8.04394 4.40193 8.49999C4 9.19615 4 10.1308 4 12C4 13.8692 4 14.8038 4.40192 15.5C4.66523 15.9561 5.04394 16.3348 5.5 16.5981C6.19615 17 7.13077 17 9 17H16M20 7L17 4M20 7L17 10" stroke="currentColor"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            return svg;
        case "bin":
            var svg = document.createElement("svg")
            svg.innerHTML = `<svg ${className == null ? `class="svgIcon"` : `class="svgIcon ${className}"` } width="15" height="15" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="binIconTitle" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="currentColor"> <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10"/> </svg>`
            return svg;

        case "empty":
            var svg = document.createElement("svg")
            svg.innerHTML = ""
            return svg;

        default:
            return getSVG("empty");
    }
}