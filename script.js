/** @format */

// https://njujbooqnwrtexzmzpjj.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWpib29xbndydGV4em16cGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU2MDAsImV4cCI6MjA0MTUzMTYwMH0.BfUJKtZC_blOYEL_J2_BaLEyjijCs9j4fqojU4kIfrg

fetch(
  "https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?select=Type,Mærke&order=Type.asc",
  /* fetch(
  "https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?Mærke=eq.GoPro?select=Objektkode", */
 /*  fetch(
    "https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?select=tags", */
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWpib29xbndydGV4em16cGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU2MDAsImV4cCI6MjA0MTUzMTYwMH0.BfUJKtZC_blOYEL_J2_BaLEyjijCs9j4fqojU4kIfrg",
      },
    }
  )
    .then((response) => response.json())
    .then(showData);

function showData(items) {
  console.log(items);
  //items.forEach()
}

//function (){}
