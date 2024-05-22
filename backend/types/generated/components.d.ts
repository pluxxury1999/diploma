import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementDescription extends Schema.Component {
  collectionName: 'components_element_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ElementListElement extends Schema.Component {
  collectionName: 'components_element_list_elements';
  info: {
    displayName: 'listElement';
    description: '';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface ElementList extends Schema.Component {
  collectionName: 'components_element_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    title: Attribute.String;
    list: Attribute.Component<'element.list-element', true>;
  };
}

export interface ElementStatistic extends Schema.Component {
  collectionName: 'components_element_statistics';
  info: {
    displayName: 'statistic';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface ElementTitle extends Schema.Component {
  collectionName: 'components_element_titles';
  info: {
    displayName: 'Title';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.description': ElementDescription;
      'element.list-element': ElementListElement;
      'element.list': ElementList;
      'element.statistic': ElementStatistic;
      'element.title': ElementTitle;
    }
  }
}
