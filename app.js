// if (
		
// 		) {
// 			alert("Please Fillup All  Input Field");
// 		} else {

//         }
 total =()=>{
             const sub1 = parseInt(document.getElementById("sub1").value);
				const sub2 = parseInt(document.getElementById("sub2").value);
				const sub3 = parseInt(document.getElementById("sub3").value);
				const sub4 = parseInt(document.getElementById("sub4").value);
				const sub5 = parseInt(document.getElementById("sub5").value);
				const sub6 = parseInt(document.getElementById("sub6").value);
                
            
			
                // if (sub1 ==	sub2 == sub3 == sub4 ==	sub5 == sub6 == "") {
				// 	alert("Please Fillup all the input fields")
				// } else {
                    	if (
							sub1 > 100 ||
							sub2 > 100 ||
							sub3 > 100 ||
							sub4 > 100 ||
							sub5 > 100 ||
							sub6 > 100
						) {
							alert("Please Write The Marks Range of 100");
						} else {
							const total =
								sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
							document.getElementById("total").innerHTML =
								"Engish Marks :" +
								sub1 +
								" <br> Bangla Marks :" +
								sub2 +
								"<br> Math Marks :" +
								sub3 +
								"<br> ICT Marks: " +
								sub4 +
								"<br> Science Marks:" +
								sub5 +
								"<br> Islam Marks :" +
								sub6 +
								"<br> ___________ <br> Total Marks :" +
								total;
						}
                        
				// }
    }
    avaerage =()=>{
        const sub1 = parseInt(document.getElementById("sub1").value);
		const sub2 = parseInt(document.getElementById("sub2").value);
		const sub3 = parseInt(document.getElementById("sub3").value);
		const sub4 = parseInt(document.getElementById("sub4").value);
		const sub5 = parseInt(document.getElementById("sub5").value);
		const sub6 = parseInt(document.getElementById("sub6").value);
    if (
		sub1 > 100 ||
		sub2 > 100 ||
		sub3 > 100 ||
		sub4 > 100 ||
		sub5 > 100 ||
		sub6 > 100
	) {
		alert("Please Write The Marks Range of 100");
	} else {
		const total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
		const average = total / 6;
		document.getElementById("ave").innerHTML =
			"Your Average Marks Is :" + parseInt(average);
	}
    }
    grades =()=>{
                const sub1 = parseInt(document.getElementById("sub1").value);
		const sub2 = parseInt(document.getElementById("sub2").value);
		const sub3 = parseInt(document.getElementById("sub3").value);
		const sub4 = parseInt(document.getElementById("sub4").value);
		const sub5 = parseInt(document.getElementById("sub5").value);
		const sub6 = parseInt(document.getElementById("sub6").value);
 
    if (
		sub1 > 100 ||
		sub2 > 100 ||
		sub3 > 100 ||
		sub4 > 100 ||
		sub5 > 100 ||
		sub6 > 100
	) {
		alert("Please Write The Marks Range of 100");
	} else {
		const total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
		const average = parseFloat(total / 6);

		if (average >= 80 && average <= 100) {
			document.getElementById("grade").innerHTML = "Your Grade Is : A+";
		} else if (average >= 70 && average <= 79) {
			document.getElementById("grade").innerHTML = "Your Grade Is : A";
		} else if (average >= 60 && average <= 69) {
			document.getElementById("grade").innerHTML = "Your Grade Is : A-";
		} else if (average >= 50 && average <= 59) {
			document.getElementById("grade").innerHTML = "Your Grade Is : B";
		} else if (average >= 40 && average <= 49) {
			document.getElementById("grade").innerHTML = "Your Grade Is : C";
		} else if (average >= 30 && average <= 39) {
			document.getElementById("grade").innerHTML = "Your Grade Is : D";
		} else {
			document.getElementById("grade").innerHTML =
				"You Are Fail In The Exam";
		}
	}
    document.getElementById("sub1").value = " ";
			document.getElementById("sub2").value = " ";
			document.getElementById("sub3").value = " ";
			document.getElementById("sub4").value = " ";
			document.getElementById("sub5").value = " ";
			document.getElementById("sub6").value = " ";
    }