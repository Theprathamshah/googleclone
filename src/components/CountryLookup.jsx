"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CountryLookup() {
	const [country, setCountry] = useState("India");

	return <div>{country}</div>;
}
