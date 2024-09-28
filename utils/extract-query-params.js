export function extractQueryParams(query){
  // Reduce pega o array e transoforma em outra estrutura
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=');

    queryParams[key] = value;

    return queryParams;
  }, {} ); // Estrutura escolhida pro reduce = {}
  
}