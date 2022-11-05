$(function () {
    $('body').on('click', '.btn-close', () => {
        $('.alert-button .btn-close').hide();
        $('.alert-button .btn-alert').css('display', 'flex').show();
        $('.campaigns-container').hide();
    });

    $('body').on('click', '.btn-alert', () => {
        $('.alert-button .btn-close').show();
        $('.alert-button .btn-alert').hide();
        $('.campaigns-container').fadeIn('slow');
    });

    $('head').append(`<style>.campaigns-alert {
        position: fixed;
        right: 3vw;
        top: 20vh;
        background: #FFF;
        width: 20vw;
        border-radius: 5px;
        z-index:9999999;
        box-shadow:0 0 5px 0 #000;
    }

    .alert-button {
        position: absolute;
        top: -30px;
        right: -30px;
    }

    .alert-button .btn-close {
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.8);
        color: #FFF;
        width: 2vw;
        height: 2vw;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
    }

    .alert-button .btn-close:hover {
        background-color: rgba(0, 0, 0, 1);
        box-shadow: 0 0 2px #FFF;
        transition: 300ms all;
        cursor: pointer;
    }

    .alert-button .btn-alert {
        display: none;
        background-color: rgba(197, 56, 56, 0.8);
        color: #FFF;
        width: 2vw;
        height: 2vw;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        line-height: 1;
    }

    .alert-button .btn-alert:hover {
        background-color: rgba(0, 0, 0, 1);
        box-shadow: 0 0 2px #FFF;
        transition: 300ms all;
        cursor: pointer;
    }

    .campaigns-container {
        overflow: hidden;
        border-radius: 5px;
    }

    .campaigns-alert .campaigns-alert-header {
        background-color: #9a3869;
    }

    .campaigns-alert .campaigns-alert-header h3 {
        margin: 0 !important;
        color: #FFF;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
        padding: 10px 5px;
    }

    .campaigns-alert .campaigns-alert-content {
        padding-bottom: 3px;
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item {
        padding: 5px;
        display: flex;
        overflow: hidden;
        height: 5vw;
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item:hover {
        background-color: rgba(0, 0, 0, 0.2);
        transition: 300ms all;
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item,
    .campaigns-alert .campaigns-alert-content .campaigns-alert-item * {
        cursor: pointer;
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item .campaigns-image {
        background-color: rgba(0, 0, 0, 0.05);
        flex: 0 0 5vw;
        overflow:hidden;
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item .campaigns-image img {
        width: 5vw;
        height: 5vw;
        display: inline-block;
        border: 1px solid rgba(0, 0, 0, 0.1)
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item .campaigns-details {
        padding-left: 1vw;
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item .campaigns-details h5 {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 0.8rem;
    }

    .campaigns-alert .campaigns-alert-content .campaigns-alert-item .campaigns-details p {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.7rem;
        line-height: 1.4rem;
        text-overflow: ellipsis;
        display: inline-block;
        flex-basis: 13vw;
    }</style>`);

    if (!$('.campaigns-alert').length) {
        $('body').append(`
              <div class="campaigns-alert">
                  <div class="campaigns-container">
                      <div class="campaigns-alert-header">
                          <h3>FIRSATLARIMIZI KEŞFEDİN</h3>
                      </div>
                      <div class="campaigns-alert-content">
                          <div class="campaigns-alert-item">
                              <div class="campaigns-image">
                                  <img src="https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20222/6081056/v1/l_20222-w2el23z1-lrb_a.jpg"
                                      alt="campaigns image">
                              </div>
                              <div class="campaigns-details">
                                  <h5>
                                      Ürün başlığı
                                  </h5>
                                  <p>ürün hakkında açıklama yazıları falan filan falanca filanda.</p>
                              </div>
                          </div>
                          <div class="campaigns-alert-item">
                              <div class="campaigns-image">
                                  <img src="https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20222/6081056/v1/l_20222-w2el23z1-lrb_a.jpg"
                                      alt="campaigns image">
                              </div>
                              <div class="campaigns-details">
                                  <h5>
                                      Ürün başlığı
                                  </h5>
                                  <p>ürün hakkında açıklama yazıları falan filan falanca filanda.</p>
                              </div>
                          </div>
                          <div class="campaigns-alert-item">
                              <div class="campaigns-image">
                                  <img src="https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20222/6081056/v1/l_20222-w2el23z1-lrb_a.jpg"
                                      alt="campaigns image">
                              </div>
                              <div class="campaigns-details">
                                  <h5>
                                      Ürün başlığı
                                  </h5>
                                  <p>ürün hakkında açıklama yazıları falan filan falanca filanda.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="alert-button">
                      <span class="btn-close"><i class="fa fa-times"></i></span>
                      <span class="btn-alert"><i class="fa fa-bell"></i></span>
                  </div>
              </div>
              `);
    }

    if (typeof Storage !== "undefined") {

        if (localStorage.getItem('items') !== null) {
            items = JSON.parse(localStorage.getItem('items'))
            if (items.length < 3) {
                $('.campaigns-alert').hide();
            }
        } else {
            $('.campaigns-alert').hide();
        }

        if ($('.product-detail').length) {
            $('.campaigns-alert').hide();
            let image = $('.product-large-image[imageindex="0"]').attr('smallimages');
            let title = $('.product-title').eq(0).text();
            let description = $('.panel-body ul li').map((idx, ele) => ele.textContent).get().join(' ');
            let discount = null;
            if ($('.basket-discount').length && discount == null) {
                discount = $('.basket-discount').eq(0).text();
            }
            let price = null;
            if ($('.advanced-price').length && price == null) {
                price = $('.advanced-price').eq(0).text();
            }
            let link = window.location.href;

            let items = [];
            if (localStorage.getItem('items') !== null) {
                items = JSON.parse(localStorage.getItem('items'))
            }
            let obj = items.find(o => o.image === image);

            if (obj === undefined) {
                if (items.length > 2) {
                    items.shift();
                }
                items.push({ image: image, title: title.trim(), description: description.trim(), link: link, discount: discount, price: price });
                localStorage.setItem("items", JSON.stringify(items));
            }
        } else {
            let items = JSON.parse(localStorage.getItem('items'))
            for (let i = 0; i < 3; i++) {
                if (localStorage.getItem('items') !== null && items[i]) {
                    $('.campaigns-alert-item').eq(i).find('img').attr('src', items[i].image);
                    $('.campaigns-alert-item').eq(i).find('h5').html(items[i].title + (items[i].discount !== null ? " <br><span style='color:red;'>Sepette indirim: " + items[i].discount + "</span>" : "<br>Fiyat: " + items[i].price));
                    $('.campaigns-alert-item').eq(i).find('p').html(items[i].description);
                    $('.campaigns-alert-item').eq(i).click(function () { window.location = items[i].link; });
                }
            }
        }

    } else {
        $('.campaigns-alert').hide();
    }
}
)
