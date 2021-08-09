import  { Component, h } from  '@stencil/core';
@Component({
    tag: 'my-rating',
    styleUrl: 'my-rating-component.css',
    shadow: true
  })
  export  class  MyRatingComponent  {
    render() {
      return  (
        <div>
          <span class="rating">&#x2605;</span>
          <span class="rating">&#x2605;</span>
          <span class="rating">&#x2605;</span>
          <span class="rating">&#x2606;</span>
          <span class="rating">&#x2606;</span>
          <span class="rating">&#x2606;</span>
        </div>
      );
    }
  }