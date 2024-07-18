using Volo.Abp.Modularity;

namespace Cre8Wise;

public abstract class Cre8WiseApplicationTestBase<TStartupModule> : Cre8WiseTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
