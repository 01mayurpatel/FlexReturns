function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active")
}




const tableRow = document.getElementsByClassName('table-row');
var flag = true;
for (let i = 1; i <= tableRow.length; i++) {


    tableRow[i - 1].addEventListener('click', () => {

        var text1Div = document.getElementById(`popup-text1.${i}`).innerText;
        var text2Div = document.getElementById(`popup-text2.${i}`).innerText;

        var text3Div = document.getElementById(`popup-text3.${i}`).innerText;

        var dropdown1 = text1Div.substring(0, text1Div.indexOf('-'));
        var dropdown2 = text1Div.substring(text1Div.indexOf('-') + 1, text1Div.length);
        var bottom2RTop1 = document.getElementById('bottom2-r-top1');
        document.getElementById('withdarw-bottom3-R2').innerText = text3Div;
        document.getElementById("popup-1").classList.toggle("active");
        var bottom2RTop = document.getElementById('bottom2-r-top');
        var bottom2RTopW = document.getElementById('bottom2-r-top-w');
        document.getElementById('bottom3-R2').innerText = text3Div;
        document.getElementById('bottom3-R1').innerText = text2Div;
        document.getElementById('dropdownMenuButton').innerText = dropdown1;
        document.getElementById('dropdown-menu-2').innerText = dropdown2;
        bottom2RTop1.innerText = dropdown1;
        bottom2RTop.innerText = `${text1Div} LP`;
        bottom2RTopW.innerText = `ROE ${text1Div} LP`;

        var Add = document.getElementById('bottom-i3');
        Add.addEventListener('click', () => {
            document.getElementById('bottom-i3').style.color = "rgb(52, 104, 251)";
            document.getElementById('bottom-i2').style.color = "rgba(255, 255, 255, 0.79)";
            document.getElementById('bottom-i1').style.color = "rgba(255, 255, 255, 0.79)";
            document.getElementById('bottom2-r-top').style.display = "block";
            document.getElementById('popup-dropdown-main').style.display = "none";
            document.getElementById('add-hidden-top').style.display = "block";
            bottom2RTop.innerText = dropdown2;
            
            
            
        })
        
        var zap = document.getElementById('bottom-i2');
        var LP = document.getElementById('bottom-i1');
        zap.addEventListener('click', () => {
            document.getElementById('bottom2-r-top').style.display = "none";
            document.getElementById('bottom-i1').style.color = "rgba(255, 255, 255, 0.79)";
            document.getElementById('add-hidden-top').style.display = "none";
            
            document.getElementById('popup-dropdown-main').style.display = "block";
            document.getElementById('bottom-i2').style.color = "rgb(52, 104, 251)";
            
            document.getElementById('bottom-i3').style.color = "rgba(255, 255, 255, 0.79)";
            
            bottom2RTop.innerText = text1Div;
        });
        LP.addEventListener('click', () => {
            document.getElementById('add-hidden-top').style.display = "none";
            document.getElementById('bottom2-r-top').style.display = "block";
            document.getElementById('bottom-i1').style.color = "rgb(52, 104, 251)";

            document.getElementById('popup-dropdown-main').style.display = "none";
            document.getElementById('bottom-i2').style.color = "rgba(255, 255, 255, 0.79)";

            document.getElementById('bottom-i3').style.color = "rgba(255, 255, 255, 0.79)";
            bottom2RTop.innerText = text1Div;

        });

        document.getElementById('popup-head2').addEventListener('click',()=>{

            document.getElementById('supply').style.display="none";
            document.getElementById('withdraw').style.display="block";
            document.getElementById('popup-head1').style.color="white";
            document.getElementById('popup-head2').style.color="rgb(52, 104, 251)";
            
        })
        document.getElementById('popup-head1').addEventListener('click',()=>{
            document.getElementById('supply').style.display="block";
            document.getElementById('withdraw').style.display="none";
            document.getElementById('popup-head2').style.color="white";
            document.getElementById('popup-head1').style.color="rgb(52, 104, 251)";

        })




    })
}



