let _makeHtml = ({
	ord_id,
	ord_date,
	ord_total,
	ord_notes,
	cust_edrpou,
	cust_name
}) => {
	let $product = $(`<tr data-order-id="${ord_id}" data-date="${ord_date}" data-price="${ord_total}"	
		data-notes="${ord_notes}" data-cust_name="${cust_name}" data-cust_id="${cust_edrpou}">
      <th scope="row" >${ord_id}</th>
      <td>${ord_date.split("T")[0]}</td>
      <td>${ord_total}</td>`);
	  if(ord_notes != null) {
	    $($product).append(`<td class="text-break">${ord_notes}</td>`);
	   }else{
	   	$($product).append(`<td>-</td>`);

	   	};
      $($product).append(`<td><a href="#" id="class="badge badge-light">${cust_name}</a></td>
      		<td> <button type="button" id ="delordbtn" class="btn btn-outline-danger butmar">Delete</button>
      		<button type="button" id ="showordline" class="btn btn-outline-primary butmar">Show info</button>
      		</td>
    	</tr>`);
	return $product;
};
 module.exports = _makeHtml;
