using System;
using System.Collections.Generic;
using System.Text;
using Cre8Wise.Localization;
using Volo.Abp.Application.Services;

namespace Cre8Wise;

/* Inherit your application services from this class.
 */
public abstract class Cre8WiseAppService : ApplicationService
{
    protected Cre8WiseAppService()
    {
        LocalizationResource = typeof(Cre8WiseResource);
    }
}
