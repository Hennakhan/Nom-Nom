import React, { Component } from "react"
import "./Notifier.css";
import classnames from 'classnames';

type NotifierProps = {
    offline: boolean;
}


class Notifier extends Component<NotifierProps> {

    render() { 
      const notifyclass = classnames('notify', {
        danger: this.props.offline
      });
      const message = this.props.offline ?
    `CloudyCam is offline! Your images will be saved now and then uploaded to your Cloudinary Media Library once your Internet connection is back up.`
    :
    `Take a picture and it will be uploaded to your Cloudinary Media Library.`;
      return (
          <div className={notifyclass}>
              <p>
                  <em>{message}</em>
              </p>
          </div>
      );
    }
  }

  export default Notifier;