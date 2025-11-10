"use client";
import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState("Ethiopia");
  useEffect(()=>{
    fetch("http://ipwho.is/196.190.62.52").then((res)=>res.json()).then((data)=>setCountry(data.country));
  }, [])
  return (
    <div>
      {country}
    </div>
  )
}
