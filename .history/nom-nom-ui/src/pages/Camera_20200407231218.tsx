import React from 'react';
import { Link } from 'react-router-dom';
import Notifier from '../components/Notifier';
import ClCamera from '../components/ClCamera';

type CameraState = {
    offline: boolean;
  }
  

class Camera extends React.Component<{}, CameraState> {
    public readonly state: CameraState = {
       offline: false
      };

      componentDidMount() {
        window.addEventListener('online', () => {
          this.setState({ offline: false });
        });

        window.addEventListener('offline', () => {
          this.setState({ offline: true });
        });
      }

      componentDidUpdate() {
        let offlineStatus = !navigator.onLine;
        if (this.state.offline !== offlineStatus) {
          this.setState({ offline: offlineStatus });
        }
      }


    render() {
    
        return(
            <div>
                <Notifier offline={this.state.offline} />
                <ClCamera offline={this.state.offline} />
            </div>
        )
    
    }  
    
} 

export default Camera;