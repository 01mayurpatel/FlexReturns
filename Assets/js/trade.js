function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active")
}
const tableRow = document.getElementsByClassName('table-row');

for (let i = 1; i <= tableRow.length; i++) {


    tableRow[i - 1].addEventListener('click', () => {

       
        
        document.getElementById("popup-1").classList.toggle("active");
       
        // top
        var topLeftPopup = document.getElementById('popup-top-left');
        var topLeftDiv = document.getElementById(`popup-top-left${i}`);
        var contentHead = document.getElementById('content-head');
        
        var topMiddlePopup= document.getElementById('popup-top-middle');
        var topMiddleDiv = document.getElementById(`popup-text1.${i}`);

        var topRightPopup = document.getElementById('popup-top-right');
        var topRightDiv  = document.getElementById(`network1.${i}`);

        var AssetName = document.getElementById('bottom2-r-top');
        var text1Div = document.getElementById(`popup-text1.${i}`).innerText;
        var dropdown1 = text1Div.substring(0, text1Div.indexOf('-'));

        var networkName  = document.getElementById(`s3-img${i}`);

        topLeftPopup.innerHTML = topLeftDiv.innerHTML;
        topMiddlePopup.innerText=topMiddleDiv.innerText;
        topRightPopup.innerHTML = topRightDiv.innerHTML + `<span>${networkName.getAttribute("name")}</span>`;
        AssetName.innerText = dropdown1
        
       
        
        
        

        
       



    })
}



