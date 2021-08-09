import  { Component, h } from  '@stencil/core';
@Component({
    tag: 'search-component',
    styleUrl: 'search-component.css',
    shadow: true
  })
  export  class  SearchComponent  {
    render() {
      return  (
        <div>
          <button class="rating">Test1</button>
          <button class="rating">Test1</button>
        </div>
      );
    }
  }