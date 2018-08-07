function SetDefaultButton(n, t) 
{
     for (var r = $("#" + n).find(".bet-type-button"), i = 0; i < r.length; i++)
        if (!$(r[i]).hasClass("hide"))
            {
                var numbers=["five","four"];
                for(var k=0;k<numbers.length;k++)
                {
                    var element = document.getElementById(n);
                    if(numbers[k]==n)
                    {
                        if(element.className.search("active")==-1)
                        {
                            element.className=element.className+" active";
                        }
                    }
                    else
                    {
                        if(element.className.search("active")==-1)
                        {
                            element.className=element.className.slice(0,-7);
                        }
                    }
                }

            $(r[i]).addClass("active");
            $(r[i]).trigger("click", ["true"]);
            break;
        }
            t !== undefined && t !== null && (BetSolutionType = t) 
}
