using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Cre8Wise;

[Dependency(ReplaceServices = true)]
public class Cre8WiseBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Cre8Wise";
}
