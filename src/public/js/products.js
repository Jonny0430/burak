console.log("Products frontend javascript file");


function validateForm() {
 const productName = $(".product-name").val();
 const productPrice = $(".product-price").val();
 const productLeftCount = $(".product-left-count").val();
 const productCollection = $(".product-collection").val();
 const productDesc = $(".product-decs").val();
 const productStatus = $(".product-status").val();
 
 if (productName === "" || 
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details!");
    return false;
  } else return true;
}

// function previewFileHandler(input, order) {
//     const imgClassName = input.className;
//     console.log("input:", input);

//     const file = $(`.${imgClassName}`).get(0).files[0];
//     const fileType = file["type"];
//     const validImageType = ["image/jpg", "image/jpeg", "image/png"];

//     if (!validImageType.includes(fileType)) {
//         alert("Please insert only jpeg, jpg and png!");
//     } else {
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function () {
//                 $(`#image-section-${order}`).attr("src", reader.result);
//             };
//             reader.readAsDataURL(file);
//         };
//     }
// } 
//  36 00