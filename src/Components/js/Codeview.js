import React from 'react'

export default function Codeview() {
    // var text = document.getElementById("content");
    // var str = text.innerHTML,
    // reg = /red|blue|green|orange/ig; //g is to replace all occurances
    // //fixing a bit
    // var toStr = String(reg);
    // var color = (toStr.replace('\/g', '|')).substring(1);

    // //split it baby
    // var colors = color.split("|");

    // if (colors.indexOf("red") > -1) {
    //     str = str.replace(/red/g, '<span style="color:red;">red</span>');
    // }

    // if (colors.indexOf("blue") > -1) {
    //     str = str.replace(/blue/g, '<span style="color:blue;">blue</span>');
    // }

    // if (colors.indexOf("green") > -1) {
    //     str = str.replace(/green/g, '<span style="color:green;">green</span>');
    // }

    // if (colors.indexOf("orange") > -1) {
    //     str = str.replace(/orange/g, '<span style="color:orange;">orange</span>');
    // }
    return (
        <div>
            <pre class="code-area">
                <code>
                    <code-tag>&#60;nav</code-tag> <code-class>className</code-class>=<code-class-name>"navbar-light"&#62;</code-class-name>
                    <code-tag>&#60;div</code-tag> <code-class>className</code-class>=<code-class-name>"container"&#62;</code-class-name>
                    <code-tag>&#60;div</code-tag> <code-class>className</code-class>=<code-class-name>"brand-name"&#62;</code-class-name> Navigation<code-tag>&#60;/div&#62;</code-tag>
                    <code-tag>&#60;/div&#62;</code-tag>
                    <code-tag>&#60;/nav&#62;</code-tag>
                </code>
            </pre>
        </div>

    )
}
