export default async function handler(req: any, res: any) {
   // get the incoming request URL, e.g. 'posts?limit=10&offset=0&order=id.asc'
   let requestUrl = req.url.substring("/api/admin/".length);
   requestUrl = requestUrl.replaceAll("eq.%21%3D", "neq.");
   // build the CRUD request based on the incoming request
   const url = `${process.env.SUPABASE_URL}/rest/v1/${requestUrl}`;
   const headers: HeadersInit = {
      prefer: req.headers["prefer"] ?? "",
      accept: req.headers["accept"] ?? "application/json",
      ["content-type"]: req.headers["content-type"] ?? "application/json",
      // supabase authentication
      apiKey: process.env.SUPABASE_SERVICE_ROLE || "",
    };
   const options: RequestInit = {
      // body: '',
      method: req.method,
      headers: headers,
   };
   if (req.body) {
     options.body = JSON.stringify(req.body);
   }
   // call the CRUD API
   const response = await fetch(url, options);
   // send the response back to the client
   res.setHeader("Content-Range", response.headers.get("content-range"));
   res.end(await response.text());
 }