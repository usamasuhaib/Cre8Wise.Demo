using Cre8Wise.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Cre8Wise.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class Cre8WiseController : AbpControllerBase
{
    protected Cre8WiseController()
    {
        LocalizationResource = typeof(Cre8WiseResource);
    }
}
