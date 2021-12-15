xui.Class('App.Input50', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"xui_ui_progressbar4")
                .setDock("origin")
                .setLeft("7.619047619047619em")
                .setTop("35.80952380952381em")
                .setFillBG("#7CFC00")
                .setWidth("25.142857142857142em")
                .setHeight("1.5238095238095237em")
                .setZIndex(1002)
                .setPosition("relative")
                .setValue(50)
                .onChange([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{temp.newbies}",
                            "global",
                            "x",
                            "{args[4]}"
                        ],
                        "method" : "call",
                        "disabled" : true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"div10")
                .setLeft("17.066666666666666em")
                .setTop("29.02857142857143em")
                .setWidth("13.257142857142858em")
                .setHeight("1.2952380952380953em")
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"div9")
                .setLeft("17.066666666666666em")
                .setTop("25.98095238095238em")
                .setWidth("13.257142857142858em")
                .setHeight("1.2952380952380953em")
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"div11")
                .setLeft("2.2857142857142856em")
                .setTop("25.904761904761905em")
                .setWidth("6.095238095238095em")
                .setHeight("1.980952380952381em")
                .setHtml("Input valid")
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"div12")
                .setLeft("2.2857142857142856em")
                .setTop("28.876190476190477em")
                .setWidth("5.79047619047619em")
                .setHeight("2.361904761904762em")
                .setHtml("Input valid (real time)")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group1")
                .setLeft("34.285714285714285em")
                .setTop("1.5238095238095237em")
                .setWidth("19.047619047619047em")
                .setHeight("12.19047619047619em")
                .setCaption("mask input")
            );
            
            host.group1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"div14")
                .setLeft("0.7619047619047619em")
                .setTop("5.6380952380952385em")
                .setWidth("6.857142857142857em")
                .setHeight("1.5238095238095237em")
                .setHtml("(111) 111-1111")
            );
            
            host.group1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"div13")
                .setLeft("0.7619047619047619em")
                .setTop("0.8380952380952381em")
                .setWidth("6.095238095238095em")
                .setHeight("1.5238095238095237em")
                .setHtml("11/11/1111")
            );
            
            host.group1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"div16")
                .setLeft("0.7619047619047619em")
                .setTop("8em")
                .setWidth("6.095238095238095em")
                .setHeight("1.5238095238095237em")
                .setHtml("(111) a-a **")
            );
            
            host.group1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"div15")
                .setLeft("0.7619047619047619em")
                .setTop("3.276190476190476em")
                .setWidth("6.095238095238095em")
                .setHeight("1.5238095238095237em")
                .setHtml("~1.11")
            );
            
            host.group1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iMask")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setTabindex("17")
                .setMask("11/11/1111")
            );
            
            host.group1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input18")
                .setLeft("7.619047619047619em")
                .setTop("5.333333333333333em")
                .setTabindex("18")
                .setMask("(111) 111-1111")
            );
            
            host.group1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input19")
                .setLeft("7.619047619047619em")
                .setTop("3.0476190476190474em")
                .setTabindex("19")
                .setMask("~1.11")
            );
            
            host.group1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input20")
                .setLeft("7.619047619047619em")
                .setTop("7.695238095238095em")
                .setTabindex("20")
                .setMask("(111) a-a **")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group2")
                .setLeft("1.5238095238095237em")
                .setTop("1.5238095238095237em")
                .setWidth("32em")
                .setHeight("12.19047619047619em")
                .setCaption("no border")
                .setToggleBtn(false)
            );
            
            host.group2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("15.00952380952381em")
                .setLabelSize("7.619047619047619em")
                .setLabelCaption("normal")
                .setValue("normal")
            );
            
            host.group2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input2")
                .setLeft("16em")
                .setTop("0em")
                .setWidth("15.00952380952381em")
                .setHeight("1.6761904761904762em")
                .setTabindex("2")
                .setLabelSize("7.619047619047619em")
                .setLabelCaption("password")
                .setType("password")
                .setValue("password")
            );
            
            host.group2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input3")
                .setLeft("0em")
                .setTop("2.4380952380952383em")
                .setWidth("31.238095238095237em")
                .setHeight("3.657142857142857em")
                .setTabindex("3")
                .setLabelSize("7.619047619047619em")
                .setLabelCaption("multi lines")
                .setMultiLines(true)
                .setValue("multi lines")
            );
            
            host.group2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input6")
                .setReadonly(true)
                .setLeft("0em")
                .setTop("6.857142857142857em")
                .setWidth("15.00952380952381em")
                .setTabindex("4")
                .setLabelSize("7.619047619047619em")
                .setLabelCaption("readonly")
                .setValue("readonly")
            );
            
            host.group2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input1")
                .setDisabled(true)
                .setLeft("16em")
                .setTop("6.857142857142857em")
                .setWidth("15.00952380952381em")
                .setTabindex("5")
                .setLabelSize("7.619047619047619em")
                .setLabelCaption("disabled")
                .setValue("disabled")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"label13")
                .setLeft("38.857142857142854em")
                .setTop("25.904761904761905em")
                .setWidth("13.714285714285714em")
                .setHeight("2.2857142857142856em")
                .setCaption("Input 'allow' only, using 'beforeFormatCheck' event")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"label10")
                .setLeft("17.523809523809526em")
                .setTop("18.438095238095237em")
                .setWidth("6.552380952380952em")
                .setCaption("integer")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"label7")
                .setLeft("0em")
                .setTop("16em")
                .setWidth("6.857142857142857em")
                .setCaption("email")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"label12")
                .setLeft("17.523809523809526em")
                .setTop("20.876190476190477em")
                .setWidth("6.552380952380952em")
                .setCaption("MM/DD/YYYY")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"label9")
                .setLeft("0em")
                .setTop("18.438095238095237em")
                .setWidth("6.857142857142857em")
                .setCaption("alpha")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"label8")
                .setLeft("17.523809523809526em")
                .setTop("16em")
                .setWidth("6.552380952380952em")
                .setCaption("letter")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"label11")
                .setLeft("0em")
                .setTop("20.876190476190477em")
                .setWidth("6.857142857142857em")
                .setCaption("number")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input9")
                .setLeft("24.83809523809524em")
                .setTop("16em")
                .setTabindex("10")
                .setValueFormat("^[a-zA-Z]*")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input11")
                .setLeft("24.83809523809524em")
                .setTop("18.438095238095237em")
                .setTabindex("12")
                .setValueFormat("^-?\\d\\d*$")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input13")
                .setLeft("24.83809523809524em")
                .setTop("20.876190476190477em")
                .setTabindex("13")
                .setValueFormat("^([0-1][0-9])/([0-3][0-9])/([0-9])")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input5")
                .setLeft("38.857142857142854em")
                .setTop("28.952380952380953em")
                .setWidth("13.714285714285714em")
                .setTabindex("14")
                .beforeFormatCheck([
                    {
                        "desc" : "动作1",
                        "type" : "none",
                        "target" : "none",
                        "params" : [ ],
                        "method" : "none",
                        "conditions" : [
                            {
                                "left" : "{args.1}",
                                "symbol" : "!=",
                                "right" : "allow"
                            }
                        ],
                        "return" : false
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input29")
                .setTips("input number")
                .setLeft("7.619047619047619em")
                .setTop("25.904761904761905em")
                .setTabindex("15")
                .setTipsErr("tipsErr : number only")
                .setTipsOK("Yeah")
                .setValueFormat("(^-?\\d\\d*\\.\\d*$)|(^-?\\d\\d*$)|(^-?\\.\\d\\d*$)")
                .setTipsBinder("div9")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input15")
                .setTips("input number")
                .setLeft("7.619047619047619em")
                .setTop("28.952380952380953em")
                .setTabindex("16")
                .setTipsErr("tipsErr : number only")
                .setTipsOK("Yeah")
                .setDynCheck(true)
                .setValueFormat("(^-?\\d\\d*\\.\\d*$)|(^-?\\d\\d*$)|(^-?\\.\\d\\d*$)")
                .setTipsBinder("div10")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input7")
                .setTips("border/resizer/shadow")
                .setLeft("35.80952380952381em")
                .setTop("16.761904761904763em")
                .setWidth("17.523809523809526em")
                .setHeight("4.571428571428571em")
                .setTabindex("6")
                .setShadow(true)
                .setResizer(true)
                .setLabelSize("7.619047619047619em")
                .setLabelCaption("border + resizer + shadow")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input8")
                .setLeft("7.619047619047619em")
                .setTop("16em")
                .setTabindex("7")
                .setValueFormat("^[\\w\\.=-]+@[\\w\\.-]+\\.[\\w\\.-]{2,4}")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input10")
                .setLeft("7.619047619047619em")
                .setTop("18.438095238095237em")
                .setTabindex("8")
                .setValueFormat("^\\w*")
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"xui_ui_progressbar2")
                .setDock("origin")
                .setLeft("33.523809523809526em")
                .setTop("41.904761904761905em")
                .setFillBG("#7CFC00")
                .setWidth("25.142857142857142em")
                .setHeight("1.5238095238095237em")
                .setZIndex(1002)
                .setPosition("relative")
                .setValue(50)
                .onChange([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{temp.newbies}",
                            "global",
                            "x",
                            "{args[4]}"
                        ],
                        "method" : "call",
                        "disabled" : true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input12")
                .setLeft("7.619047619047619em")
                .setTop("20.876190476190477em")
                .setTabindex("9")
                .setValueFormat("^-?(\\d\\d*\\.\\d*)|(^-?\\d\\d*)|(^-?\\.\\d\\d*)")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});