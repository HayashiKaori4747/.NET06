using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace DUAN1.Shared
{
    public partial class NavMenu : ComponentBase
    {
        [Inject] private NavigationManager Navigation { get; set; }
        [Inject] private IJSRuntime JS { get; set; }

        async Task ScrollToSection(string sectionId)
        {
           
            await JS.InvokeVoidAsync("scrollToSection", sectionId);

            
            Navigation.NavigateTo("/" + sectionId, false);
        }
    }
}