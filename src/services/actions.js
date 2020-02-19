export const fetchProducts = () => {
  return fetch("https://api.myjson.com/bins/qzuzi")
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(result => {
      this.setState({
        items: result
      });
    })
    .catch(error => console.log(error));
};
