const  productDetailExtractor = () => {

    const productNameTag = document.querySelector(".product_title entry-title")
  
    if (productNameTag){
        const productName = productNameTag.textContent.trim()
        console.log(productName);
    }
}

productDetailExtractor()