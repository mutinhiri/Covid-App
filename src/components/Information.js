import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdArrowBackIosNew } from 'react-icons/md'
import { fetchCovidData } from "../redux/covid";

export const Information = (props) => {
  const { region } = props
  const rpl = region.rpl.replace('-', '_');

  const covidData = useSelector((state) => state.covid)
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (!covidData[rpl]) dispatch(fetchCovidData(rpl))
  }, []);
  return (
    <div>
      <div className="details-header">
        <Link to="/">
          <MdArrowBackIosNew />
        </Link>
        <p>state/region details</p>
      </div>
      <div className="main-card">
        <img src={region.map_image_url} alt={`${region.state}-map`} />
      </div>
    </div>
  )
}
