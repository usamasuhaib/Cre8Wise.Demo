using Volo.Abp.Settings;

namespace Cre8Wise.Settings;

public class Cre8WiseSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(Cre8WiseSettings.MySetting1));
    }
}
