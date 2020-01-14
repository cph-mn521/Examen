import React from 'react';
import facade from '../../apiFacade';
import { ResultTable } from './ResultTable';
import Loader from '../Loader';

export class ResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reslist: [],loading:true
    };
  }

  componentDidMount(){
    const { reslist } = this.state;
    const { loading } = this.state;
    facade.getFoodPlans().then(res => this.setState({ reslist: res })).then(this.setState({loading : false}));
    
  }

  getDescription() {}

  exampleAdd(e) {
    e.preventDefault();
    const { reslist } = this.state;
    const { key } = this.state;
    var list = this.state.reslist;
    const newItem = this.newItem.value;

    list.unshift({
      key: this.state.key,
      title: newItem,
      origin: 'button',
      lastupdate: 'ligeNU!',
      price: 9999,
      imgurl: 'https://i.ebayimg.com/images/g/WSgAAOSwJeVd4OJd/s-l200.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed ullamcorper nulla. Pellentesque quis sapien justo. Etiam pellentesque ornare eros, ullamcorper mattis libero facilisis eget. Aenean et ante ut sapien.',
    });

    this.setState({ reslist: list, key: key + 1 });
  }

  getAll(e) {
    e.preventDefault();
    const { reslist } = this.state;
    var list = this.state.reslist;
    facade.TryGet().then(res => this.setState({ reslist: res }));
  }

  somefunction(e) {
    e.preventDefault();
    const { msgs } = this.state;
    var list = this.state.msgs;
    const newItem = this.newItem.value;
    facade.TryGet(newItem, list).then(res => this.setState({ msgs: list }));
  }

  render() {
    const { msgs } = this.state;
    if (this.state.loading){
      return <Loader />
    }
    else{
    return (
      <div className="ResultList">
        {/* <form
          onSubmit={e => {
            this.exampleAdd(e);
          }}
        >
          <label> SearchBar</label>
          <input
            ref={input => (this.newItem = input)}
            placeholder="SEARCH"
            id="addButton"
          />
          <button type="submit"> Search </button>
        </form>
        <button
          onClick={e => {
            this.getAll(e);
          }}
        >
          Hent Producter fra vores API
        </button> */}

        <div className="ResultTableContainer">
          <ResultTable reslist={this.state.reslist} />
        </div>
      </div>
    );}
  }
}
