import React, { Component } from 'react'

import MyListView from './MyListView'
import ListStore from '../stores/ListStore'
import ButtonActions from '../actions/ButtonActions'

export default class MyListViewController extends Component {

  state = {
    items: ListStore.getAll()
  }

  constructor(props) {
    super(props)
    this.onListChange = this._onListChange.bind(this)
  }

  componentDidMount() {
    ListStore.addChangeListener(this.onListChange)
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this.onListChange)
  }

  _onListChange() {
    this.setState({
      items: ListStore.getAll()
    })
  }

  _onAddItemClick() {
    ButtonActions.addItem('item')
  }

  _onRemoveItemClick() {
    ButtonActions.removeItem()
  }

  render() {
    return (
      <MyListView
        items={this.state.items}
        addItemClickFunc={this._onAddItemClick}
        removeItemClickFunc={this._onRemoveItemClick}/>
    )
  }
}