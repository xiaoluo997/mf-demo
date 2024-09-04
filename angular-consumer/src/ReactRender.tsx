import { ReactElement } from 'react'
import type { Root } from 'react-dom/client'
import {createRoot} from 'react-dom/client'
export class ReactRender {
  private instance: Root
  constructor(root:HTMLElement) {
    this.instance = createRoot(root)
  }

  private _render(element:ReactElement) {
    this.instance.render(element)
    return this
  }
  protected destory() {
    this.instance.unmount()
  }

  static init(element:ReactElement,root:HTMLElement) {
    return new ReactRender(root)._render(element)
  }
}