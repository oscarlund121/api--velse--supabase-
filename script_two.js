/** @format */

const url =
  "https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?Mærke=eq.GoPro";
//const url =
("https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?select=Type,Mærke&order=Mærke.asc");

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWpib29xbndydGV4em16cGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU2MDAsImV4cCI6MjA0MTUzMTYwMH0.BfUJKtZC_blOYEL_J2_BaLEyjijCs9j4fqojU4kIfrg";

const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(show);

function show(items) {
  console.log(items);
}
