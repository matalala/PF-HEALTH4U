import React, { useState, useEffect } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from "../patient/CloudinaryService";


export default function Clou({ seteditinput, editinput, seterror, validationError }) {

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dymfd1z8t",
      tags: [tag, 'anImage'],
      uploadPreset: "upload"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          seteditinput({ ...editinput, image: photos.info.secure_url })
          seterror(validationError({ ...editinput, image: photos.info.secure_url }))
        }
      } else {
      }
    })
  }

  useEffect(() => {
    fetchPhotos("image", editinput.image);
  }, [])

  return (
    <CloudinaryContext cloudName="dymfd1z8t">
      <div >
        <button onClick={() => beginUpload("image")}>Edit photo profile</button>
      </div>
    </CloudinaryContext>
  );
}

