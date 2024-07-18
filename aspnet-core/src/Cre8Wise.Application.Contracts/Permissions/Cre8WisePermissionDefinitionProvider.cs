using Cre8Wise.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Cre8Wise.Permissions;

public class Cre8WisePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(Cre8WisePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(Cre8WisePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<Cre8WiseResource>(name);
    }
}
