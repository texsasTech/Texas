import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Col} from 'react-bootstrap'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Link from 'next/link'
export default function CardF({name,url,category,origin}) {



	return (
<Col  xs={12} md={6} lg={4} xl={3} style={{paddingRight:'10px'}} >
<Link href={'brands/'+name}>
<a >
<Card style={{filter:'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08))',cursor:'pointer', backgroundColor:'#F4F6F9',borderRadius:'8px',marginTop:'16px'}} key={name} >
			<CardMedia component="img" height="250" image={url} alt="image" />
			<CardContent >
<div style={{marginRight:'16px',marginLeft:'16px'}}>
<p className="s1 nntext" style={{ color: "#002169" }}>
					{name}
				</p>
			
					<span className="b2" style={{ color: "#526899" }}>
					<InfoOutlinedIcon/>	 {category}
					</span>
				 <br />
				 <span className="b2" style={{ color: "#526899" }}>
					 <FmdGoodOutlinedIcon/> {origin}
				 </span>
			 <br />
		
</div>
			</CardContent>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'16px'}}>
            </div>
		</Card>
</a>
</Link>
</Col>
	);
}
