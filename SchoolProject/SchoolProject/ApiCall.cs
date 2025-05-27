using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Mime;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace SchoolProject
{
    public static class ApiCall
    {
        public static HttpClient Initial()
        {
            var client = new HttpClient();
            client.Timeout = TimeSpan.FromMinutes(10);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.BaseAddress = new Uri("https://devapi.inschoolerp.com/");
            return client;
        }
        public static async Task<string> ApiCallWithOutObject(string URl, string Action)
        {
            try
            {
                HttpClient client = Initial();
                client.DefaultRequestHeaders.Accept.Clear();
                HttpContent httpContent = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                HttpResponseMessage res = new HttpResponseMessage();
                if (Action == "Post")
                {
                    res = await client.PostAsync(URl, httpContent);
                }
                else
                {
                    res = await client.GetAsync(URl);
                }

                if (res.IsSuccessStatusCode)
                {
                    string result = res.Content.ReadAsStringAsync().Result;
                    return result;
                }
                else
                {
                    return "Null";
                }

            }
            catch (Exception ex)
            {
                string Exception = ex.ToString(); var ExceptionSubstring = Exception.Substring(0, 1500); return RedirectToAction("Exception", "Helper", new { ExceptionString = ExceptionSubstring });
            }
        }



        public static async Task<string> ApiCallWithString(string URl, string _GetString, string Action)
        {
            try
            {
                HttpClient client = Initial();
                HttpContent httpContent = new StringContent(JsonConvert.SerializeObject(_GetString), UTF8Encoding.UTF8, "application/json");
                HttpResponseMessage res = await client.PostAsync(URl, httpContent);
                if (res.IsSuccessStatusCode)
                {
                    string result = res.Content.ReadAsStringAsync().Result;
                    return result;
                }
                else
                {
                    return "Null";
                }

            }
            catch (Exception ex)
            {
                string Exception = ex.ToString(); var ExceptionSubstring = Exception.Substring(0, 1500); return RedirectToAction("Exception", "Helper", new { ExceptionString = ExceptionSubstring });
            }
        }

        internal static Task<string> ApiCallWithString(string v, string tokenNo)
        {
            throw new NotImplementedException();
        }

        private static string RedirectToAction(string v1, string v2, object p)
        {
            throw new NotImplementedException();
        }

        public static async Task<string> ApiCallWithObject(string URl, object _GetObject, string Action)
        {
            try
            {
                HttpClient client = Initial();
                HttpContent httpContent = new StringContent(JsonConvert.SerializeObject(_GetObject), UTF8Encoding.UTF8, "application/json");
                HttpResponseMessage res = await client.PostAsync(URl, httpContent);
                if (res.IsSuccessStatusCode)
                {
                    string result = res.Content.ReadAsStringAsync().Result;
                    return result;
                }
                else
                {
                    return "Null";
                }

            }
            catch (Exception ex)
            {
                string Exception = ex.ToString(); var ExceptionSubstring = Exception.Substring(0, 1500); return RedirectToAction("Exception", "Helper", new { ExceptionString = ExceptionSubstring });
            }
        }

    }
}