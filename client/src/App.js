import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  state = {
    data: [],
    id: 0,
    title: null,
    artist: null,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    updateToApply: null,
    updateToApply2: null,
    emptyselect: "HI",
  };

 // fetch all existing data in our db at outset
  componentDidMount() {
    this.getDataFromDb();
    
  }
  // our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("http://localhost:3001/api/songs")
      .then(data => data.json())
      .then(res => this.setState({ data: res }))
  };

//   // our put method that uses our backend api
//   // to create new query into our data base
  putDataToDB = (title, artist) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/add-song", {
      id: idToBeAdded,
      title: title,
      artist: artist
    }).then(this.getDataFromDb);
  };


  // our delete method that uses our backend api 
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === parseInt(idTodelete, 10)) {        
        objIdToDelete = dat._id;
      }
    });
    if (objIdToDelete !== null){
        axios.delete(`http://localhost:3001/api/delete-song/${objIdToDelete}`)
        .then(this.getDataFromDb);
    }
  }

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply, updateToApply2) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === parseInt(idToUpdate, 10)) {
        objIdToUpdate = dat._id;
      }
    });

    axios.put(`http://localhost:3001/api/update-song/${objIdToUpdate}`, {
      id: objIdToUpdate,
      update: { title: updateToApply, artist: updateToApply2 }
    }).then(this.getDataFromDb);
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <h1>hi</h1>
        <div className="dataBase">
          <ul>
            {data.length <= 0
              ? "NO DB ENTRIES YET"
              : data.map(dat => (
                  <li style={{ padding: "10px" }} key={data.title}>
                    <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                    <span style={{ color: "gray" }}> title: </span>
                    {dat.title}
                    <span style={{ color: "gray" }}> artist: </span>
                    {dat.artist}
                  </li>
                ))}
          </ul>
        </div>
        <div className="inputstyles">
          <div className="addstyles"style={{ padding: "10px" }}>
            <input
              type="text"
              onChange={e => this.setState({ title: e.target.value })}
              placeholder="title of song"
              style={{ width: "200px" }}
            />
            <input
              type="text"
              onChange={e => this.setState({ artist: e.target.value })}
              placeholder="song's artist"
              style={{ width: "200px" }}
            />
            <button onClick={() => this.putDataToDB(this.state.title, this.state.artist)}>
              ADD
            </button>
          </div>
          <div className="deletestyles"style={{ padding: "10px" }}>
            <input
              type="text"
              style={{ width: "200px" }}
              onChange={e => this.setState({ idToDelete: e.target.value })}
              placeholder="put id of item to delete here"
            />
            <select
              onChange={e => this.setState({ idToDelete: e.target.value })}
              >
              <option 
                value={-1}
                key={"title"}
              >
                {data.length <= 0 
                  ? "Database Empty" 
                  : "Please Select Object to Delete"}
              </option>
              {data.length <= 0
                ? "NO DB ENTRIES YET"
                : data.map(dat => (
                    <option 
                      value={dat.id}
                      key={data.title}
                    >
                        id: {dat.id}, 
                        title: {dat.title}, 
                        artist: {dat.artist}
                    </option>
                  ))}
            </select>
            <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
              DELETE
            </button>
          </div>
          <div className="updatestyles"style={{ padding: "10px" }}>
          <div className="update1">
            <input
                type="text"
                style={{ width: "200px" }}
                onChange={e => this.setState({ idToUpdate: e.target.value })}
                placeholder="id of song to update here"
              />
              <br></br>
              <div className="titletext">Title: </div>
              <input
                type="text"
                style={{ width: "200px" }}
                onChange={e => this.setState({ updateToApply: e.target.value })}
                placeholder="put title of the song here"
              />
              <div className="artisttext">Artist: </div>
              <input
                type="text"
                style={{ width: "200px" }}
                onChange={e => this.setState({ updateToApply2: e.target.value })}
                placeholder="put artist name here"
              />
          </div>
          
            <div className="update2">
              <button
                onClick={() =>
                  this.updateDB(this.state.idToUpdate, this.state.updateToApply, this.state.updateToApply2)
                }
              >
                UPDATE
              </button>
            </div>
            
          </div>
        </div>

      </div>
    );
  }
}

export default App;