import { baseURL } from "./constants";

export const apiPostRequest = (token, data) => {
	console.log("token,data",token,data)
	return new Promise(async (resolve, reject) => {
		try {
			let url=new URL(`${baseURL}${data.endPoint}`);
			const response = await fetch(url, {
				body: JSON.stringify(data.body),
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'POST',
			}).then((res) => res.json());

			if (response.status == 200) {
				resolve(response);
			} else {
				reject(response);
			}
		} catch (error) {
			console.log(error);
		}
	});
};


export const apiPutRequest = (token, data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let url=new URL(`${baseURL}${data.endPoint}`);
			const response = await fetch(url, {
				body: JSON.stringify(data.body),
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'PUT',
			}).then((res) => res.json());

			if (response.status == 200) {
				resolve(response);
			} else {
				reject(response);
			}
		} catch (error) {
			console.log(error);
		}
	});
};

export const apiGetWithQueryRequest = (token, data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let url=new URL(`${baseURL}${data.endPoint}`);
			url.search= new URLSearchParams(data.query).toString();
			const response = await fetch(url, {
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'GET',
			}).then((res) => res.json());

			if (response.status == 200) {
				resolve(response);
			} else {
				reject(response);
			}
		} catch (error) {
			console.log(error);
		}
	});
};

export const apiGetWithParamsRequest = (token, data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let url=new URL(`${baseURL}${data.endPoint}`);
			Object.keys(data.params).forEach(key=>url.pathname=`${url.pathname}/${data.params[key]}`)
			const response = await fetch(url, {
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'GET',
			}).then((res) => res.json());

			if (response.status == 200) {
				resolve(response);
			} else {
				reject(response);
			}
		} catch (error) {
			console.log(error);
		}
	});
};

export const apiDeleteRequest = (token, data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let url=new URL(`${baseURL}${data.endPoint}`);
			const response = await fetch(url, {
				body: JSON.stringify(data.body),
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'DELETE',
			}).then((res) => res.json());

			if (response.status == 200) {
				resolve(response);
			} else {
				reject(response);
			}
		} catch (error) {
			console.log(error);
		}
	});
};


export const apiUploadFileRequest = (token, data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let url=new URL(`${baseURL}${data.endPoint}`);
			const response = await fetch(url, {
				body: data.form,
				headers: {
					Authorization: token,
				},
				method: 'PUT',
			}).then((res) => res.json());

			if (response.status == 200) {
				resolve(response);
			} else {
				reject(response);
			}
		} catch (error) {
			console.log(error);
		}
	});
};