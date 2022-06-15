import React, { Component } from 'react';

class Map extends Component {

    render() {

        return (
            <div className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.176952279253!2d101.68593306451798!3d3.0472246546211283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4adda95454df%3A0xc499423fb7d73d55!2sTechnology%20Park%20Malaysia%20Business%20Center%2C%20Bukit%20Jalil!5e0!3m2!1sen!2s!4v1623452648455!5m2!1sen!2s" loading="lazy"></iframe>
            </div>
        );
    }
}

export default Map;