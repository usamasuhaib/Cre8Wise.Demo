using Xunit;

namespace Cre8Wise.EntityFrameworkCore;

[CollectionDefinition(Cre8WiseTestConsts.CollectionDefinitionName)]
public class Cre8WiseEntityFrameworkCoreCollection : ICollectionFixture<Cre8WiseEntityFrameworkCoreFixture>
{

}
