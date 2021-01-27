// Ricreate lo slider visto in jQuery con vue. Personalizzatelo come meglio credete.

var app = new Vue({
  el: '#container',
  data: {
    counter: 0,
    imgsSrc: [
      'img/aladdin.jpg',
      'img/dumbo.jpg',
      'img/il-re-leone.jpg',
      'img/libro-giungla.jpg',
      'img/peter-pan.jpg',
    ],
    imgsAlt: [
      'Aladdin',
      'Dumbo',
      'Il Re Leone',
      'Il libro della giungla',
      'Peter Pan',
    ],
    interval: '',
    keyCode: ''
  },
  created() {
    this.interval = setInterval(this.nextPhotoAutomatic, 2000)
  },
    methods: {
      // ho creato la funzione nextPhotoAutomatic(), che sostanzialmente uguale a nextPhoto(), perché in questo modo in nextPhoto() ho potuto aggiungere il clearTimeout (voglio che cliccando sulla freccia destra lo slider smetta di scorrere automaticamente)
      nextPhotoAutomatic() {
        (this.counter == this.imgsSrc.length - 1) ? this.counter = 0 : this.counter++;
        console.log(this.counter);
      },
      nextPhoto() {
        (this.counter == this.imgsSrc.length - 1) ? this.counter = 0 : this.counter++;
        console.log(this.counter);
        clearTimeout(this.interval);
      },
      prevPhoto() {
        (this.counter == 0) ? this.counter = this.imgsSrc.length - 1 : this.counter--;
        console.log(this.counter);
        clearTimeout(this.interval);
      },
      changePhoto(index) {
        this.counter = index;
        clearTimeout(this.interval);
      },
      changeWithArrow(e) {
        this.keyCode = e.keyCode;
        if(this.keyCode == 39) {
          this.nextPhoto();
        } else if (this.keyCode == 37) {
          this.prevPhoto();
        }
      }

    }
});

window.addEventListener('keydown', function(e) {
  app.changeWithArrow(e);
});
