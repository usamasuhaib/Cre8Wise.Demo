using Volo.Abp.Modularity;

namespace Cre8Wise;

[DependsOn(
    typeof(Cre8WiseDomainModule),
    typeof(Cre8WiseTestBaseModule)
)]
public class Cre8WiseDomainTestModule : AbpModule
{

}
