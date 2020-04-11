import React, { Component } from "react"
import "./Notifier.css";
import classnames from 'classnames';

type NotifierState = {}


class Notifier extends Component<{}, NotifierState> {

    public readonly state: NotifierState = {};

    render() {
      const notifyclass = classnames('notify', {
        danger: false
      });
      const message = false ?
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