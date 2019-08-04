//ivent pada saat link di klik
$('.scroll').on('click', function(e){

   //ambil isi href
   var tujuan =$(this).attr('href');
   console.log(href);
  
 //tangkap element ybs
   var elementujuan = $(tujuan);
   //pindahkan scroll
   $("body").animate({
   	scrolltop: elementujuan.offset().top -50
   },1000, "swing");

    e.preventdefault();

    console.log('ok');
});