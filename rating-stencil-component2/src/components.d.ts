/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyRating2 {
    }
    interface SearchComponent {
    }
}
declare global {
    interface HTMLMyRating2Element extends Components.MyRating2, HTMLStencilElement {
    }
    var HTMLMyRating2Element: {
        prototype: HTMLMyRating2Element;
        new (): HTMLMyRating2Element;
    };
    interface HTMLSearchComponentElement extends Components.SearchComponent, HTMLStencilElement {
    }
    var HTMLSearchComponentElement: {
        prototype: HTMLSearchComponentElement;
        new (): HTMLSearchComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-rating2": HTMLMyRating2Element;
        "search-component": HTMLSearchComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyRating2 {
    }
    interface SearchComponent {
    }
    interface IntrinsicElements {
        "my-rating2": MyRating2;
        "search-component": SearchComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-rating2": LocalJSX.MyRating2 & JSXBase.HTMLAttributes<HTMLMyRating2Element>;
            "search-component": LocalJSX.SearchComponent & JSXBase.HTMLAttributes<HTMLSearchComponentElement>;
        }
    }
}