import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ReactDOM from 'react-dom/client';
import ProviderButton from 'federation_provider/button';
import ProField from 'federation_provider/proField';
import Table from 'federation_provider/table';
import Form from 'federation_provider/form';
import fib from 'federation_provider/fib';
import { ReactRender } from '../ReactRender';

import React from 'react';
console.log('ProviderButton', ProviderButton);
console.log('ProField', ProField);
console.log('Table', Table);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-consumer';
  @ViewChild('react', { static: true })
  reactEleRef!: ElementRef<HTMLDivElement>;

  private reactComponent?: any;

  ngAfterViewInit() {
    this.reactComponent = ReactRender.init(
      <div>
        <h1>这是 anguar 应用，使用react 渲染的antd 组件，没安装 antd </h1>
        <ProviderButton onClick={() => alert(1)} type="primary">
          在 angular 中引入生成着提供的组件
        </ProviderButton>
        <hr />
        <ProviderButton
          danger
          onClick={() => console.log(fib(10))}
          type="primary"
        >
          调用生产者提供的函数
        </ProviderButton>
        <Table></Table>
        <hr></hr>
        <Form
          onFinish={(values: any) => console.log('formValue', values)}
        ></Form>
      </div>,

      this.reactEleRef.nativeElement,
    );
  }

  ngOnDestroy(): void {
    this.reactComponent?.unmount();
  }
}
