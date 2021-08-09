import  { Component, h } from  '@stencil/core';
@Component({
    tag: 'my-rating2',
    styleUrl: 'my-rating-component2.css',
    shadow: true
  })
  export  class  MyRatingComponent2  {
    render() {
      return  (
        <div>
          <span class="rating">&#x2605;</span>
          <span class="rating">&#x2605;</span>
          <span class="rating">&#x2605;</span>
          <span class="rating">&#x2605;</span>
          <span class="rating">&#x2606;</span>
        </div>
      );
    }
  }