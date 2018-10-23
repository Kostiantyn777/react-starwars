import React, { Component } from 'react';
import './App.css';
import StarshipList from './Components/starshipList';
import SearchBox from './Components/searchBox';
import Selection from './Components/Selection';
import Particles from 'react-particles-js';
import PersonsList from './Components/personsList';
import PlanetList from './Components/planetList';
import VehiclesList from './Components/vehiclesList';
import FilmList from './Components/filmList';
import SpeciesList from './Components/speciesList';
import Navigation from './Components/Navigation';

const particlesOpts = {
  "particles": {
    "number": {
      "value": 284,
      "density": {
        "enable": true,
        "value_area": 868.0624057955
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 4.008530152163807,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 144.30708547789706,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


  const particlesOpts2 = {
  "particles": {
    "number": {
      "value": 66,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
class App extends Component {
	constructor() {
		super ();
    this.state ={
      results:[],
      films:[],
      starships:[],
      vehicles:[],
      species:[],
      planets:[],
      searchfield:'',
      route:'selection',
  }
};

 
onButtonSelection = (route) => { 
    this.setState({route: route});
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const {results,searchfield,route} = this.state;
    if(this.state.route !== 'selection'){
      fetch(`https://swapi.co/api/${this.state.route}/`)
    .then(response => response.json())
    .then(data => this.setState({results:data.results}));
    }
    if(route === 'films'){
      var resultsFiltered = results.filter(result => {
        return result.title.toLowerCase().includes(searchfield.toLowerCase());
      });
    } else {
      var resultsFiltered = results.filter(result => {
        return result.name.toLowerCase().includes(searchfield.toLowerCase());
      });
    }
    if(results.length === 0 && route !== 'selection'){
      return <h1 className='tc pt6'>Loading...</h1>
    } else {
    switch (route) {
      case 'selection':
        return(
          <div className="tc">
          <Particles className='particles'
            params={particlesOpts}
          />
            <h1 className='f1'>Star Wars</h1>
            <h2 className='f3 pt3'>Search through your favorite Star Wars Categories!</h2>
            <Selection onButtonSelection={this.onButtonSelection}/>
          </div>
        )
      case 'people':
        return(
          <div className="tc">
            <Particles className='particles'
            params={particlesOpts2}
          />
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite people!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <PersonsList people={resultsFiltered}/>
           
          </div>
        );
      case 'planets':
        return(
          <div className="tc">
          <Particles className='particles'
            params={particlesOpts2}
          />
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite planet!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <PlanetList planets={resultsFiltered}/>
          </div>
        );
      case 'films':
        return(
          <div className="tc">
          <Particles className='particles'
            params={particlesOpts2}
          />
            <Navigation onButtonSelection={this.onButtonSelection}/>  
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite film!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <FilmList films={resultsFiltered}/>
          </div>
        );
      case 'species':
        return(
          <div className="tc">
          <Particles className='particles'
            params={particlesOpts2}
          />
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite species!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <SpeciesList species={resultsFiltered}/>
          </div>
        );
      case 'vehicles':
        return(
          <div className="tc">
          <Particles className='particles'
            params={particlesOpts2}
          />
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite vehicle!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <VehiclesList vehicles={resultsFiltered}/>
          </div>
        );
      case 'starships':
        return(
          <div className="tc">
          <Particles className='particles'
            params={particlesOpts2}
          />
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favorite starship!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <StarshipList starships={resultsFiltered}/>
          </div>
        );
    }
  }
    }
}

export default App;