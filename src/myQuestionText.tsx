import React from "react";
import MyQuestionTextProps from "../src/types/MyQuestionTextProps";

class MyQuestionText extends React.Component<MyQuestionTextProps> {
    render() {
        var paragraphs = this.props.rawText.split(". ");
        return (
            <div>
                <p>{this.props.rawText}</p>
            </div>
        );
    }
}
export default MyQuestionText;