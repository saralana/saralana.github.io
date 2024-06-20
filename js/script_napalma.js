

map.on('load', () => {
  $(document).ready(function () {

    $.ajax({
      type: "GET",
      url: 'https://docs.google.com/spreadsheets/d/1AbjMeyFH1DJFPLmaZhIlE98_KqAEJAfxgeZnqBLMNf0/gviz/tq?tqx=out:csv&sheet=FOTOS',
      //url: 'assets/maps/beco/FOTOS.csv',
      dataType: "text",
      success: function (csvData) { makeGeoJSON2(csvData); }
    });


    });          
    
    // FOTOS

    function makeGeoJSON2(csvData) {
      csv2geojson.csv2geojson(csvData, {
        latfield: 'Latitude',
        lonfield: 'Longitude',
        delimiter: ','
      }, function (err, data) {
        
        const images = [
          { name: 'f1', path: 'assets/maps/beco/marker.png' },
          { name: 'f2', path: 'assets/maps/beco/marker.png' },
          { name: 'f3', path: 'assets/maps/beco/marker.png' },
          { name: 'f4', path: 'assets/maps/beco/marker.png' }
        ];

        Promise.all(
          images.map(image => new Promise((resolve, reject) => {
            map.loadImage(
              image.path,
              function(error, img) {
                if (error) reject(error);
                map.addImage(image.name, img);
                resolve();
              }
            );
          }))
        ).then(() => {

          // LAYER
          map.addLayer({
            'id': 'Fotos',
            'type': 'symbol',
            'source': {
              'type': 'geojson',
              'data': data
            },

            'layout': {
              'visibility': 'visible',
              'icon-image': '{Icon}',
              'icon-anchor': 'bottom',
              "icon-allow-overlap": true,
            }
          });        

          map.on('click', 'Fotos', function (e) {
              var coordinates = e.features[0].geometry.coordinates.slice();

              //var description = `<img src="./assets/fotos/foto` + e.features[0].properties.Galeria + `.png" style="width:80%;">`;
              var description = '<a href="../assets/fotos/foto' + e.features[0].properties.Galeria + '_4.png"><img src="../assets/fotos/foto' + e.features[0].properties.Galeria + '_4.png"></a>';
              
              var images =  [
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_1.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_2.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_3.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_4.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_5.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_6.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_7.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_8.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_9.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_10.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_11.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_12.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_13.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_14.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_15.jpg'],
                    ['assets/fotos/foto' + e.features[0].properties.Galeria + '_16.jpg']
                    ]
              
              var slideshowContent = ""
              
              for (var i = 0; i < images.length; i++) {
                var img = images[i];

                slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                  '<img src="' + img[0] + '" />' +
                  '</div>';
              }
              
              var popupContent = '<div class="popup">' + 
                '<div class="slideshow">' +
                slideshowContent +
                '</div>' +
                '<div class="cycle">' +
                '<a href="#" class="prev">‹</a>' +
                '<a href="#" class="next">›</a>' +
                '</div>' +
              '</div>';
              

              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }

              /* mostarda();*/

              //only one popup once 
              e.originalEvent.cancelBubble3 = true;
              if (e.originalEvent.cancelBubble || e.originalEvent.cancelBubble2 || e.originalEvent.cancelBubble4) {
                  return;
              }

                // create the popup
              /*                
              new mapboxgl.Popup({className: 'popupFotos'})
                .setLngLat(coordinates)
                .setPopup(description)
                .addTo(map); */

              
              new mapboxgl.Popup({closeButton: true, className: 'popupFotos'})
                .setLngLat(coordinates)
                .setHTML(popupContent)
                .addTo(map); 
          });


          $('#map').on('click', '.popup .cycle a', function () {
          var $slideshow = $('.slideshow'),
            $newSlide;

          if ($(this).hasClass('prev')) {
            $newSlide = $slideshow.find('.active').prev();
            if ($newSlide.index() < 0) {
              $newSlide = $('.image').last();
            }
          } else {
            $newSlide = $slideshow.find('.active').next();
            if ($newSlide.index() < 0) {
              $newSlide = $('.image').first();
            }
          }

          $slideshow.find('.active').removeClass('active').hide();
          $newSlide.addClass('active').show();
          return false;
        }); 

        

          map.on('mouseenter', 'Fotos', function () {
            map.getCanvas().style.cursor = 'pointer';
          });

          map.on('mouseleave', 'Fotos', function () {
            map.getCanvas().style.cursor = '';
          });

            map.setLayoutProperty('Fotos', 'icon-size', 
          ['interpolate', ['linear'], ['zoom'],11,0.08,14,0.4]);
          
        // });

        }).catch((error) => {
          console.error(error);
        });
      });
    }    
    
 });