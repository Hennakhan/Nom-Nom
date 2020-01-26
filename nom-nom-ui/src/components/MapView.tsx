import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { getAllFood, Food } from '../utils/DataService';

type NomMapComponentProps = {
  position: LatLng | undefined;
  zoom: number,
  food: Food[]
}

export const NomMapComponent = ({ position, zoom = 13, food = [] }: NomMapComponentProps) => {

  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {food.map(food => {
        let pos = new LatLng(food.location.Latitude, food.location.Longitude);
        return <Marker position={pos}>
          <Popup>
            <b>{food.type}</b>
            <br />
            {food.name}
            <br />
            {food.number}
            <br />
            {food.address}
            <br />
          </Popup>
        </Marker>
      })}
    </Map>
  )
}
