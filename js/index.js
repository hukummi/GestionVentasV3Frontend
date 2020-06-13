//const { response } = require("express");

$(function(){
  getProducts();
});

function getProducts(){
  var options = {
    method: 'GET',
    headers: {},
    mode: 'cors',
    cache: 'default'
  };

  fetch(API_PRODUCT, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (productsJson) {
      var products = $('#content-products');
      $.each(productsJson, function(index, product){
        var productHtml = `<div class="col-sm-4 col-lg-3">
                            <div class="card">
                              <img src="${product.imagen}" alt="${product.nombre}" class="card-img-top img-fluid" height="241">
                              <div class="card-body">
                                <h3>$${product.precio}</h3>
                                <h5>${product.nombre}</h5>

                                <div class="input-group mb-3">
                                  <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i class="fas fa-minus"></i></button>
                                  </div>
                                  <input type="text" class="form-control text-center" placeholder="" value="0">
                                  <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-plus"></i></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`;
                        
        products.append(productHtml);
      });
    })
    .catch(function(error){
      console.log(error);
      alert('Error');
    });
}